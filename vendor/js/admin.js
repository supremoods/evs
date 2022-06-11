function profileContent(){
    let dropdown = document.querySelector('.profile_content');
    dropdown.classList.toggle('active');
}

function loadModal(){
    let loadModal = document.querySelector('.modal_load_wrapper');
    loadModal.classList.toggle('modal');
}

function loadRequestModal(){
    let requestModal = document.querySelector('.request-elections-modal');
    requestModal.classList.toggle('modal');
}

function loadContent(content){
   window.location.href = content;
}

$('.logout').click(function(){
    alert("Logout Successful");
    window.location.href = "/logout";
});
   


const optionMenu = document.querySelector(".select-menu"),
  selectBtn = optionMenu.querySelector(".select-btn"),
  options = optionMenu.querySelectorAll(".option"),
  sBtn_text = optionMenu.querySelector(".sBtn-text");


selectBtn.addEventListener("click", () =>
  optionMenu.classList.toggle("active")
);


options.forEach((option) => {
  option.addEventListener("click", () => {
    let selectedOption = option.querySelector(".option-text").innerText;
    sBtn_text.innerText = selectedOption;

    optionMenu.classList.remove("active");
  });
});


const optionMenuStatus = document.querySelector(".select-menu-status"),
  selectBtnStatus = optionMenuStatus.querySelector(".select-btn-status"),
  optionsStatus = optionMenuStatus.querySelectorAll(".optionStatus"),
  sBtn_text_Status = optionMenuStatus.querySelector(".sBtn-text-status");


selectBtnStatus.addEventListener("click", () =>
  optionMenuStatus.classList.toggle("active")
);


optionsStatus.forEach((optionStatus) => {
  optionStatus.addEventListener("click", () => {
    let selectedOption = optionStatus.querySelector(".option-text-status").innerText;
    sBtn_text_Status.innerText = selectedOption;

    optionMenuStatus.classList.remove("active");
  });
});


const filterIcon = document.querySelector(".filter-icon"),
    filterWrapper = document.querySelector(".filter-wrapper");

filterIcon.addEventListener("click", () => 
  filterWrapper.classList.toggle("active")
);



