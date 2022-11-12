import faker from "faker";
import CommentDetail from "./CommentDetail";

function App() {

  return (
    <div className="ui container comments" >
      <CommentDetail author="To"/>
      <CommentDetail author="Ma" />
    </div>
  );
}

export default App;
