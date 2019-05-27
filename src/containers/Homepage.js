import React, { Component } from "react";
import { getObject } from "../utils";
import { toast } from "react-toastify";
import NewsCard from "../NewsCard"
import Axios from "axios";
import Loader from "../Loading2"
import { Row } from "react-bootstrap"
export default class extends Component {

  state = {
    isLoading: false,
    values: [],
    error: null
  }


  componentDidMount() {
    this.setState({
      isLoading: true
    })
    Axios.get("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=f148e7c6334d4defa0a6131948f5e961")
      .then(res =>
        this.setState({
          isLoading: false,
          values: res.data.articles

        })
      )
      .catch(error => this.setState({ error: error, isLoading: false }))
  }

  render() {

    const { isLoading, error, values } = this.state;
    console.log(values, "datatatatata")
    return (

      <div>

        {error ? toast.error("Error in Loading API") : null}

        <Row style={{
          marginTop: "60px", marginLeft: "390px"
        }}>
          <h1>Tech-News</h1>

        </Row>

        <Row>
          {isLoading ? <h3> <Loader /></h3> : this.state.values.map((items) => <NewsCard key={items.id} heading={items.title} imageurl={items.urlToImage} date={items.publishedAt} content={items.content} author={items.author}
            description={items.description}>
          </NewsCard>)}
        </Row>

      </div >
    )

  }
}
