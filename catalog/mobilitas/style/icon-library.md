```react
responsive: true
state: {clicked: 0}
---
<div>
<style>{`
.box {
  background: black;
  width: 100vw;
  height: 100%;
  padding:25px;
  box-sizing: border-box;
  color: white;
  text-align: center;
  font-family: 'Helvetica';
  transition: .7s background;
}
@media (min-width: 360px) {
  .box {
    background: #2BF1D3;
    color: #482AC6;
    text-align: left;
  }
}
@media (min-width: 1024px) {
  .box {
    background: #CED3DF;
    color: #482AC6;
  }
}
@media (min-width: 1440px) {
  .box {
    background: tomato;
    color: purple;
  }
}
@media (min-width: 1920px) {
  .box {
    background: purple;
    color: #2BF1D3;
    font-family: 'Georgia';
  }
}
`}</style>
<div className='box'>
    <h1>Hello World</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

    <button onClick={() => setState({clicked: state.clicked + 1})}>
      Clicked {state.clicked} times
    </button>
</div>
</div>
```
