let appState={
  title: {color: 'red',text: '标题'},
  content:{color:'green',text:'内容'}
}
function renderTitle(title) {
  let titleEle=document.querySelector('#title');
  titleEle.innerHTML=title.text;
  titleEle.style.color=title.color;
}
function renderContent(content) {
  let contentEle=document.querySelector('#content');
  contentEle.innerHTML=content.text;
  contentEle.style.color=content.color;
}


function createStore(reducer) {
  let state;
  let listeners=[];
  function getState() {
    return state;
  }

  function dispatch(action) {
    state=reducer(state,action);
    listeners.forEach(l=>l());
  }
  dispatch({});
  function subscribe(listener) {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(item => item!=listener);
      console.log(listeners);
    }
  }
  return {
    getState,
    dispatch,
    subscribe
  }

}
let initState={
  title: {color: 'red',text: '标题'},
  content:{color:'green',text:'内容'}
}
let reducer=function (state=initState,action) {
  switch (action.type) {
    case 'UPDATE_TITLE_COLOR':
      return {...state,title: {...state.title,color:action.color}};
    case 'UPDATE_CONTENT_CONTENT':
      return {...state,content: {...state.content,text:action.text}};    
    default:
      return state;    
  }
}
let store=createStore(reducer);
function render() {
  renderTitle(store.getState().title);
  renderContent(store.getState().content);
}
  
render();
let unsubscribe = store.subscribe(render);
setTimeout(function () {
  store.dispatch({type:'UPDATE_TITLE_COLOR',color:'purple'});
  unsubscribe();
  store.dispatch({type:'UPDATE_CONTENT_CONTENT',text:'新标题'});
},2000);