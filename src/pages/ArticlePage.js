import { useParams } from "react-router-dom";
import articles from "./article-content";
import NotFoundPage from './NotFoundPage';
import CommmentsList from "../components/CommentsList";
import { useState, useEffect } from "react";
import axios from "axios";

const ArticlePage = () => {
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });
  const { articleId } = useParams();

  useEffect(() => {
    const loadArticleInfo = async () => {
      const response = await axios.get(`/api/articles/${articleId}`);
      console.log(response);
      const newArticleInfo = response.data;
      console.log(response.data);
      setArticleInfo(newArticleInfo);
    }

    loadArticleInfo();
  }, []);

 
  const article = articles.find(article => article.name === articleId);

  if (!article) {
    return <NotFoundPage />
  }

  return (
    <>
      <h1>{article.title}</h1>
      <p>This article has {articleInfo.upvotes} upvote(s)</p>
      {article.content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      <CommmentsList comments={articleInfo.comments} />
    </>
  );
};

export default ArticlePage;
