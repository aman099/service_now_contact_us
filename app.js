const labels = document.querySelectorAll(
	".hero-section .hero-left form .input-cont label"
);

labels.forEach((label) => {
	label.innerHTML = label.innerText
		.split("")
		.map(
			(letter, idx) =>
				`<span style="transition-delay:${idx * 30}ms">${letter}</span>`
		)
		.join("");

	if (label.style.color === "#b33233") {
		label.style.color === "#b33233";
	}
});

// Input Validation
const errorIcon = document.querySelector(".error-msg");
const error = document.querySelector(".error-msg span");

const inputFields = document.querySelectorAll(
	".hero-section .hero-left form .input-cont input"
);

const selectFields = document.querySelectorAll(
	".hero-section .hero-left form .input-cont select"
);

const textAreaFields = document.querySelectorAll(
	".hero-section .hero-left form .input-cont textarea"
);

inputFields.forEach((inputField) => {
	inputField.addEventListener("blur", () => {
		console.log("Input Field Empty!!");
		error.style.color = "#b33233";
		errorIcon.style.color = "#b33233";
		inputField.style.outlineColor = "#b33233";
		inputField.nextElementSibling.style.color = "#b33233";
	});
});

selectFields.forEach((selectField) => {
	selectField.addEventListener("blur", () => {
		console.log("Select Field Empty!!");
		error.style.color = "#b33233";
		errorIcon.style.color = "#b33233";
		selectField.style.outlineColor = "#b33233";
		selectField.style.color = "#b33233";
	});
});

textAreaFields.forEach((textAreaField) => {
	textAreaField.addEventListener("blur", () => {
		console.log("Select Field Empty!!");
		error.style.color = "#b33233";
		errorIcon.style.color = "#b33233";
		textAreaField.style.outlineColor = "#b33233";
		textAreaField.style.color = "#b33233";
	});
});
