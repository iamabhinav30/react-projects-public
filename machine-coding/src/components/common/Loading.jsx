const Loading = () =>{
    return(
        <div className="loading-overlay d-flex justify-content-center align-items-center">
      <img
        alt="Loading..."
        className="rotate-clockwise img-fluid"
        src="../src/assets/images/logo.png"
        style={{ maxWidth: "80px", height: "auto" }}
      />
    </div>
    )
}

export default Loading;