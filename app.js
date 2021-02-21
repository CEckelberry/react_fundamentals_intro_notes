const App = () => {
    return (
        <div>
            <RandomChoice choices={['red', 'green', 'yellow']} />
            <Animal 
            name="Stevie Chicks" 
            species="Silkie Chicken" 
            emoji=":chicken:"
            isCute={true}/>
            <Animal name="Patrick" species="Red Fox" emoji="U+1F414"/>
            <RandomNum />
            <RandomNum />
            <RandomNum />
            <Shiba />
            <PitBull />
            <Shiba />
            <Bouncer age={19} />
            <Bouncer age={11} />
            <Bouncer age={39} />
            <TodoList todos={["walk chickens", "feed chickens", "eat chickens"]}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))