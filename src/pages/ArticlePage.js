import { useParams } from "react-router-dom";
import articles from "./article-content";
import NotFoundPage from './NotFoundPage';
import CommmentsList from "../components/CommentsList";
import { useState, useEffect } from "react";
import axios from "axios";
import AddCommentForm from "../components/AddCommentForm";

const ArticlePage = () => {
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [], canUpvote: false });
  const { canUpvote } = articleInfo;
  const { articleId } = useParams();

  const [user, isLoading] = useState();

  useEffect(() => {
    const loadArticleInfo = async () => {
      const token = user && await user.getIdToken();
      const headers = token ? { authToken: token } : {};
      const response = await axios.get(`/api/articles/${articleId}`, { headers });
      const newArticleInfo = response.data;
      setArticleInfo(newArticleInfo);
    }

    if (isLoading) {
      loadArticleInfo();
    }
  }, [isLoading, user]);

 
  const article = articles.find(article => article.name === articleId);

  const addUpvote = async () => {
    const token = user && await user.getIdToken();
    const headers = token ? { authToken: token } : {};
    const response = await axios.put(`/api/articles/${articleId}/upvote`,null, { headers });
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
          ? <button onClick={addUpvote}>{canUpvote ? 'Upvote': 'Already Upvoted'}</button>
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
            onArticleUpdated={updatedArticle => setArticleInfo(updatedArticle)}/>
        : <button>Log into add a comment</button>}
      <CommmentsList comments={articleInfo.comments} />
    </>
  );
};

export default ArticlePage;
