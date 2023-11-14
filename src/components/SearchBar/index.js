import {Component} from 'react'

import SearchItem from '../SearchItem'
import './index.css'

class SearchBar extends Component{
    state={searchInput:''}

    searchInput=event=>{
        this.setState({searchInput:event.target.value})
    }

    render(){
        const{searchInput}=this.state
        const {destinationsList}=this.props 
        const SearchResults=destinationsList.filter(each=>
            each.name.toLowerCase().includes(searchInput.toLowerCase()),
        )

        return(
            <div className='app-container'>
                <div className='search-container'>
                    <h1 className='heading'>Search the Place</h1>
                    <div className='search-cont'>
                    <input type="search" className='search-input'placeholder='Search' value={searchInput} onChange={this.searchInput}/>
                    <img src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
                        alt="search icon"
                        className="search-icon"/>
                    </div>
                <ul className='list-places'>
                    {SearchResults.map(each=>(
                        <SearchItem key={each.id} 
                        placeDetails={each}
                    />
                    ))}
                </ul>
            </div>
            </div>
        )
    }

}
export default SearchBar