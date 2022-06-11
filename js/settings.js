class Setting {
  constructor() {
    this.settingDom = document.querySelector(".setting");
    this.quizDom = document.querySelector(".quiz");
    this.numberOfQuestions = document.querySelector("#nQuestion");
    this.categoryDom = document.querySelector("#category");

    this.difficultyDom = [
      document.querySelector("#easy"),
      document.querySelector("#medium"),
      document.querySelector("#hard"),
    ];

    this.settingBtn = document.querySelector("#settingBtn");
    this.settingBtn.addEventListener("click", this.startQuiz);
  }

  /**
   * @ This is a function for the start quiz by collecting the data from the DOM.
   */
  startQuiz = () => {
    const num = this.numberOfQuestions.value;
    const category = this.categoryDom.value;
    const diffOption = this.getDifficulty();
    const URL = `https://opentdb.com/api.php?amount=${num}&category=${category}&difficulty=${diffOption}`;

    const myReturnedData = this.fetchAPI(URL);
    // console.log(myReturnedData);
  };

  /**
   * @ This is a function for fetching the API.
   */
  fetchAPI = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  /**
   * @ This is a function for getting the difficulty from the selection in the DOM.
   */
  getDifficulty = () => {
    let diff = this.difficultyDom.filter((ele) => ele.checked);

    if (diff.length === 1) {
      return diff[0].id;
    } else {
      alert("There is no input for the difficulty!");
    }
  };
}

export default Setting;
