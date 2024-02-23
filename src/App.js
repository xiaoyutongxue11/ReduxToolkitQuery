import "./App.css";
import { useGetStudentsQuery } from "./store/studentApi";
import StudentList from "./Components/StudentList/StudentList";
function App() {
  const { data, isError, isLoading, isSuccess } = useGetStudentsQuery();
  return (
    <div className="App">
      {isLoading && <p>正在加载</p>}
      {isError && <p>请求出错</p>}
      {isSuccess && (
        <div>
          <StudentList stus={data.data}/>
        </div>
      )}
    </div>
  );
}

export default App;
