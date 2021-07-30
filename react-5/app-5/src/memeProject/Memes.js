import React from 'react'


class Meme extends React.Component {
	constructor() {
		super()
		this.state = {
			topText: "",
			bottomText: "",
			randomImg: "http://i.imgflip.com/1bij.jpg",
			allMemes: []
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	componentDidMount() {
		fetch("https://api.imgflip.com/get_memes")
		.then(response => response.json()) 
		.then(response => {
			const {memes} = response.data
			this.setState({allMemes: memes})
		})
	}

	handleChange(event) {
		const {name, value} = event.target
		this.setState ({
			[name] : value
		})
	}

	handleSubmit(event){
		event.preventDefault()
		const randomNum = Math.floor(Math.random() * this.state.allMemes.length)
		const randomMeme = this.state.allMemes[randomNum].url

		this.setState({ randomImg: randomMeme })

	}
	
	render() {
		return(
			<div>
				<form className="meme-form" onSubmit={this.handleSubmit}> 

					<input type="text" name="topText" value={this.state.topText} onChange={this.handleChange} placeholder="Top Text"/>
					<input type="text" name="bottomText" value={this.state.bottomText} onChange={this.handleChange} placeholder="Bottom Text"/>

				<button>Generate</button>
				</form>
				{/* 
				this bootom area will make it possible to display the memes that we are receving
				from the api call and then placing in the array
				 */}

				 <div className="meme">
					 <img src={this.state.randomImg} alt="meme"/>
					 <h2 className="top">{this.state.topText}</h2>
					 <h2 className="bottom">{this.state.bottomText}</h2>

				 </div>
			</div>
		)
	}

}

export default Meme