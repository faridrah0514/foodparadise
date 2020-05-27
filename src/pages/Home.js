import React, { Component } from 'react'
import ImageAndWelcome from '../components/ImageAndWelcome';
import CityLists from '../components/CityLists'
import SearchCity from '../components/SearchCity'
import Axios from 'axios'

class Home extends Component {
    constructor() {
        super()
        this.state = {
            keyword: '',
            featuredCitites: null,
            citiesResultSearch: null,
            cityKeywordSearch: ''
        }

        this.changeKeywordHandler = this.changeKeywordHandler.bind(this)
        // this.searchHandler = this.searchHandler.bind(this)
    }

    changeKeywordHandler(event) {
        this.setState({ keyword: event.target.value })
        console.log("from search city component", this.state.keyword)
    }

    getFeaturedCities() {
        const zomato_url = 'https://developers.zomato.com/api/v2.1/cities'
        Axios.get(zomato_url, {
            headers: {
                "user-key": '0a9b09f920694447f6adbfb4d6bb6219'
            },
            params: {
                "city_ids": "74,11052,170"
            }
        }).then(data => {
            this.setState({ featuredCitites : data.data.location_suggestions })
            console.log(this.state.featuredCitites)
        })
        .catch(err => console.log(err))
    }

    componentDidMount() {
        this.getFeaturedCities()
        // console.log("ini dari lifecycle componentdidMount", this)
    }

    searchHandler = () => {
        console.log("search handler being clicked")
        console.log(this)
        console.log("ini adalah keyword", this.state.keyword)
        const zomato_url = 'https://developers.zomato.com/api/v2.1/cities'
        Axios.get(zomato_url, {
            headers: {
                "user-key": '0a9b09f920694447f6adbfb4d6bb6219'
            },
            params: {
                "q": this.state.keyword
            }
        }).then(data => {
            this.setState({
                citiesResultSearch: data.data.location_suggestions,
                cityKeywordSearch: this.state.keyword,
                keyword: ''
            })
            console.log(this.state)
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <>
                <ImageAndWelcome />
                <div className="container">
                    <CityLists cities={this.state.featuredCitites} title={'Featured City'} />
                    <SearchCity value={this.state.keyword} onChange={this.changeKeywordHandler} onClick={this.searchHandler}/>
                    <CityLists cities={this.state.citiesResultSearch} title={'Search Result'} subtitle={this.state.cityKeywordSearch} showSubtitle={true}/>
                </div>
            </>
        )
    }
}

export default Home