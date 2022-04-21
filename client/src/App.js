import './App.css';

function App() {
  const formSubmitHandler = (e) => {
    e.preventDefault();
    const name = document.getElementById('name');
    const files = document.getElementById('files');
    const formData = new FormData();
    formData.append('name', name.value);
    for (let i = 0; i < files.files.length; i++) {
      formData.append('files', files.files[i]);
    }
    fetch('http://localhost:5000/upload_files', {
      method: 'POST',
      body: formData,
      // headers: {
      //   'Content-Type': 'multipart/form-data',
      // },
    })
      .then((res) => console.log(res))
      .catch((err) => ('Error occured', err));
  };

  return (
    <div className="App">
      <h1>File Upload</h1>
      <form id="form">
        <div class="input-group">
          <label for="name">Your name</label>
          <input name="name" id="name" placeholder="Enter your name" />
        </div>
        <div class="input-group">
          <label for="files">Select files</label>
          <input id="files" type="file" multiple />
        </div>
        <button
          class="submit-btn"
          type="submit"
          onClick={(e) => formSubmitHandler(e)}
        >
          Upload
        </button>
      </form>
    </div>
  );
}

export default App;
