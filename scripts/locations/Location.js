export const Locations = (locationObj) => {
	return `<article class="location-card">
				<h3 class="location-name">${locationObj.name}</h3>
				<ol>
					<li class="Locations">${locationObj.step1}</li>
					<li class="Locations">${locationObj.step2}</li>
					<li class="Locations">${locationObj.step3}</li>
				</ol>
            </article>`
}
