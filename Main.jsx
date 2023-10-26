import React from "react";
import FeaturedTutorials from './FeaturedTutorials';
import ArticleCard from './ArticleCard';
import Footer from './Footer'
import FeaturedArticles from "./FeaturedArticles";

function Main(){
    return(
        <div>
        <ArticleCard/>
        <FeaturedArticles/>
        <FeaturedTutorials/>
        <Footer/>
        </div>
    )
}
export default Main;