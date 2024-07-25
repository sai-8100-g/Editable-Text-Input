import {Component} from 'react'
import {MainContainer, TextContent, Heading, Input, Button, Para} from './style'

class Content extends Component {
  state = {
    isSave: true,
    searchInput: '',
  }

  onClickToToggleButton = () => {
    this.setState(prevState => ({isSave: !prevState.isSave}))
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {isSave, searchInput} = this.state
    return (
      <MainContainer>
        <TextContent>
          <Heading>Editable Text Input</Heading>
          <div className="inputContainer">
            {isSave ? (
              <Input
                type="text"
                value={searchInput}
                onChange={this.onChangeSearchInput}
              />
            ) : (
              <Para>{searchInput}</Para>
            )}
            {isSave ? (
              <Button type="Button" onClick={this.onClickToToggleButton}>
                Save
              </Button>
            ) : (
              <Button type="Button" onClick={this.onClickToToggleButton}>
                Edit
              </Button>
            )}
          </div>
        </TextContent>
      </MainContainer>
    )
  }
}

export default Content
