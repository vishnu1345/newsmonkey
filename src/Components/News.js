import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
export class News extends Component {
//   articles = [
    
//       {
//         source: { id: "abc-news", name: "ABC News" },
//         author: "Mason Leib",
//         title: "'Gen V' actor Chance Perdomo dies at 27 - ABC News",
//         description:
//           "Perdomo died following a motorcycle accident, his family said in a statement.",
//         url: "https://abcnews.go.com/GMA/Culture/chance-perdomo-actor-gen-v-dies-27/story?id=108691062",
//         urlToImage:
//           "https://i.abcnewsfe.com/a/66264208-1e0a-49b5-b6f7-4452bf23fe60/Chance-Perdomo-gty-jm-240331_1711890074426_hpMain_16x9.jpg?w=1600",
//         publishedAt: "2024-04-01T16:03:38Z",
//         content:
//           'Chance Perdomo, star of "Gen V," has died after a motorcycle accident, his family and representatives announced. The actor was 27 years old.\r\nNo other individuals were involved in the accident, accor… [+2267 chars]',
//       },
//       {
//         source: { id: null, name: "The Athletic" },
//         author: "Brendan Quinn",
//         title:
//           "Matt Painter's chess moves and Zach Edey's relentlessness lead Purdue to Final Four - The Athletic",
//         description:
//           "Matt Painter and the Boilermakers made all the right chess moves, and now they're going to the Final Four.",
//         url: "https://theathletic.com/5382421/2024/04/01/purdue-matt-painter-zach-edey-final-four/",
//         urlToImage:
//           "https://cdn.theathletic.com/app/uploads/2024/03/31222007/edey-scaled.jpg",
//         publishedAt: "2024-04-01T16:02:42Z",
//         content:
//           "DETROIT Before the nets came down on a day few will forget, Matt Painter walked across the court and extended a hand. He needed to see one of his own. Robbie Hummel had done his damnedest for the pre… [+10173 chars]",
//       },
//       {
//         source: { id: "the-washington-post", name: "The Washington Post" },
//         author:
//           "Niha Masih, Leo Sands, Evan Hill, Cate Brown, Karen DeYoung, Shira Rubin, Louisa Loveluck, Dan Lamothe",
//         title:
//           "Latest Israel-Hamas war news and Gaza conflict updates - The Washington Post",
//         description:
//           "Emergency workers who arrived at al-Shifa Hospital say it was badly bombarded. Israel’s military said it conducted “precise operational activity” against Hamas.",
//         url: "https://www.washingtonpost.com/world/2024/04/01/israel-hamas-war-news-gaza-palestine/",
//         urlToImage:
//           "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/4DFTKGBTDXS4KEGWNPUXFDX4IQ_size-normalized.jpg&w=1440",
//         publishedAt: "2024-04-01T15:59:44Z",
//         content: null,
//       },
//       {
//         source: { id: null, name: "Yahoo Entertainment" },
//         author: "Yahoo! Voices",
//         title:
//           "Trump's media company raises going-concern doubts; shares tumble - Yahoo! Voices",
//         description: null,
//         url: "https://www.yahoo.com/tech/trumps-media-company-falls-raising-143421881.html",
//         urlToImage: null,
//         publishedAt: "2024-04-01T15:51:31Z",
//         content: null,
//       },
//       {
//         source: { id: null, name: "New York Post" },
//         author: "Snejana Farberov",
//         title:
//           "Russian intelligence hit squad behind Havana Syndrome brain injuries of US personnel: report - New York Post ",
//         description:
//           "Members of Russian military intelligence unit 29155, who allegedly have access to microwave or ultrasound weapons, have been placed at the scene of reported attacks.",
//         url: "https://nypost.com/2024/04/01/us-news/russian-hit-squad-behind-havana-syndrome-report/",
//         urlToImage:
//           "https://nypost.com/wp-content/uploads/sites/2/2024/04/newspress-collage-lph9c4rm2-1711982985877.jpg?quality=75&strip=all&1711968641&w=1024",
//         publishedAt: "2024-04-01T14:22:00Z",
//         content:
//           "A shadowy Russian hit squad may be behind the mysterious “Havana Syndrome” that has left more than 100 US diplomats, White House staffers, intelligence agents and their families with unexplained brai… [+7224 chars]",
//       },
//       {
//         source: {
//           id: "the-wall-street-journal",
//           name: "The Wall Street Journal",
//         },
//         author: "The Wall Street Journal",
//         title:
//           "U.S. Guns Flow Into Haiti as Gangs Push to Take Control - The Wall Street Journal",
//         description: null,
//         url: "https://www.wsj.com/world/americas/u-s-guns-flow-into-haiti-as-gangs-push-to-take-control-41a53822",
//         urlToImage: null,
//         publishedAt: "2024-04-01T14:00:00Z",
//         content: null,
//       }
    
//   ];

  constructor() {
    super();
    this.state = {
    //   articles: this.articles,
      articles: [],
      loading: false,
      page: 1
    };
  }
  handlePrev = async ()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=6a12f9d39be24a54997bb7e2b8dc18a2&page=${this.state.page -1}&pageSize=${this.props.pagesize}`
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState(
      {articles: parsedData.articles,
      page: this.state.page -1,
    loading: false }
      )
    console.log("prev")

    };
  handleNext = async ()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=6a12f9d39be24a54997bb7e2b8dc18a2&page=${this.state.page + 1}&pageSize=${this.props.pagesize}`
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState(
      {articles: parsedData.articles,
      page: this.state.page + 1 ,
      loading: false}
      )

    console.log("next")
  };
  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=6a12f9d39be24a54997bb7e2b8dc18a2&page=1&pageSize=${this.props.pagesize}`
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState({articles: parsedData.articles,
    loading: false})

  }
  render() {
    News.defaultProps={
      category:"general"
    }
    return (
      <>
        <div className="container my-3 ">
          <h2 className="text-center">News Monkey - Top Headlines</h2>
          {this.state.loading && <Spinner/>}
          <div className="row">
          {this.state.articles.map((element) => {
             return <div className="col-md-4 my-3" key={element.url} >
                {!this.state.loading && <Newsitem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>}
              </div>
           
          })}
           </div>;
           <div className="container d-flex justify-content-between">

           <button type="button" disabled={this.state.page<=1?true:false}className="btn btn-dark" onClick={this.handlePrev}>previous</button>
           <button type="button" className="btn btn-dark" onClick={this.handleNext}>Next</button>
           </div>
        </div>
      </>
    )
  }
}

export default News;
