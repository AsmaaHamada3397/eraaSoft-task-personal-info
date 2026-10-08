export default function Steps() {
  return (
    <div className="steps-container ">
      <div className="steps">
        <div className="d-flex flex-column steps-content">
          <div className="d-flex gap-3">
            <p className="step-1">1</p>
            <div className="d-flex flex-column">
              <span className="title">STEP 1</span>
              <span className="desc"> YOUR INFO </span>
            </div>
          </div>

          <div className="d-flex gap-3">
            <p className="step-2">2</p>
            <div className="d-flex flex-column">
              <span className="title">STEP 2</span>
              <span className="desc"> SELECT PLAN </span>
            </div>
          </div>
          
          <div className="d-flex gap-3">
            <p className="step-2">3</p>
            <div className="d-flex flex-column">
              <span className="title">STEP 3</span>
              <span className="desc"> ADD-ONS </span>
            </div>
          </div>

          <div className="d-flex gap-3">
            <p className="step-2">4</p>
            <div className="d-flex flex-column">
              <span className="title">STEP 4</span>
              <span className="desc"> SUMMARY </span>
            </div>
          </div>
        </div>
        <div className="image">
          <img src="/public/Group 10.png" alt="back-ground-image" />
        </div>
      </div>
    </div>
  );
}