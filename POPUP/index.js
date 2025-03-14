let selectedServices = [];
        let categorySelections = { category1: [], category2: [], category3: [] };

        function updateCheckboxes() {
            const category = document.getElementById("category").value;
            const checkboxContainer = document.getElementById("checkboxes");
            checkboxContainer.innerHTML = "";
            let options = [];
            let maxSelection = 3;

            if (category === "category1") {
                options = ["Website Audit", "Website Design/Redesign", "Landing Page Creation"];
            } else if (category === "category2") {
                options = [
                    "Logo Design/Refresh", "Brochure Design (Digital or Print)", "Flyer Design", 
                    "Business Card Design", "Social Media Graphics", "Poster Design", "Mailer Design"
                ];
                maxSelection = 6;
            } else if (category === "category3") {
                options = [
                    "Explainer Video Production", "Promotional Video Production", "Testimonial Video Production", 
                    "Social Media Video Creation", "Video Editing (Client provides raw footage)"
                ];
                maxSelection = 3;
            }

            if (options.length > 0) {
                options.forEach((option) => {
                    let div = document.createElement("div");
                    let checkbox = document.createElement("input");
                    checkbox.type = "checkbox";
                    checkbox.value = option;
                    checkbox.checked = categorySelections[category].includes(option);
                    checkbox.onchange = function () { updatePrice(category, maxSelection, option, checkbox.checked); };
                    let label = document.createElement("label");
                    label.innerText = option;
                    div.appendChild(checkbox);
                    div.appendChild(label);
                    checkboxContainer.appendChild(div);
                });
            }
        }

        function updatePrice(category, maxSelection, service, isChecked) {
            if (isChecked) {
                if (categorySelections[category].length < maxSelection) {
                    categorySelections[category].push(service);
                } else {
                    document.querySelectorAll('.checkbox-group input').forEach(chk => {
                        if (chk.value === service) chk.checked = false;
                    });
                    return;
                }
            } else {
                categorySelections[category] = categorySelections[category].filter(item => item !== service);
            }

            selectedServices = [...categorySelections.category1, ...categorySelections.category2, ...categorySelections.category3];
            let count = selectedServices.length;
            let price = 0;
            if (count >= 3) price = 297 * Math.ceil(count / 3);
            document.getElementById("price").innerText = "$" + price;
            document.getElementById("submit").disabled = ![3, 6, 9, 12].includes(count);
        }

        function redirectToPage() {
            window.location.href = "https://app.gohighlevel.com/v2/preview/GLpgEsL2S13Nu6djNBNg?notrack=true";
        }

        function openModal() {
            document.getElementById("popup").style.display = "flex";
        }
        function closeModal() { 
            document.getElementById("popup").style.display = "none";
        }