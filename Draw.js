class Draw extends React.Component {

  state = {
    options: ['First omen', 'Second omen', 'Third omen'],
    option: '',
    value: ''
  }

  handleDrawOption = () => {
    const randomIndex = Math.floor(Math.random() * this.state.options.length);
    this.setState({
      option: this.state.options[randomIndex]
    })
  }

  handleInsertOption = e => {
    this.setState({
      value: e.target.value
    })
  }

  handleAddOption = e => {
    const newOptions = [...this.state.options];
    newOptions.push(this.state.value)
    if (this.state.value === '') return alert(`You didn't add any omen! Write down somethin in insert and click 'Add omen'!`)

    this.setState({
      options: newOptions
    })
    alert(`You add omen: ${this.state.value}. All of yours omens are: ${newOptions}`)
  }

  render() {

    return (
      <div>
        <button onClick={this.handleDrawOption}>Draw omen</button>
        {this.state.option ? <h1>{this.state.option}</h1> : null}
        <br />
        <input type="text" onChange={this.handleInsertOption} />
        <button onClick={this.handleAddOption}>Add omen</button>
      </div>
    )
  }
}

ReactDOM.render(<Draw />, document.getElementById('root'));