export default function Steps() {
  return (
    <div className="form-container">
      <div className="form-fields">
        <div>
          <h1>Personal info</h1>
          <p>Please provide your name, email address, and phone number.</p>
        </div>

        <div className="fields">
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="e.g. Stephen King"
            />
          </div>

          <div>
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="e.g. stephenking@lorem.com"
            />
          </div>

          <div>
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              className="form-control"
              placeholder="e.g. +1 234 567 890"
            />
          </div>
        </div>

        <div className="text-end btn-container">
            <button className="btn">
                Next Step
            </button>
        </div>
      </div>
    </div>
  );
}
