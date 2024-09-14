import { useParams } from "react-router-dom";
import articles from "./article-content";
import NotFoundPage from './NotFoundPage';
import CommmentsList from "../components/CommentsList";
import { useState, useEffect } from "react";
import axios from "axios";
import AddCommentForm from "../components/AddCommentForm";

const ArticlePage = () => {
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });
  const { articleId } = useParams();

  const [user, isLoading] = useState();

  useEffect(() => {
    const loadArticleInfo = async () => {
      const response = await axios.get(`/api/articles/${articleId}`);
      const newArticleInfo = response.data;
      setArticleInfo(newArticleInfo);
    }

    loadArticleInfo();
  }, []);

 
  const article = articles.find(article => article.name === articleId);

  const addUpvote = async () => {
    const response = await axios.put(`/api/articles/${articleId}/upvote`);
    const updateArticle = response.data;
    setArticleInfo(updateArticle);
  }

  if (!article) {
    return <NotFoundPage />
  }

  return (
    <>
      <h1>{article.title}</h1>
      <div className="upvotes-section">
        {user 
          ? <button onClick={addUpvote}>Upvote</button>
          : <button>Log into upvote</button>
        }  
        <p>This article has {articleInfo.upvotes} upvote(s)</p>
      </div>
      {article.content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      {user
        ? <AddCommentForm
          articleName={articleId}
          onArticleUpdated={updateArticle => setArticleInfo(updateArticle)} 
          />
        : <button>Log into add a comment</button>}
      <CommmentsList comments={articleInfo.comments} />
    </>
  );
};

export default ArticlePage;
