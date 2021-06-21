  const world = document.querySelector('.world-wrapper');
  const countries = world.querySelectorAll('.country');

  console.log(countries)

  countries.forEach(country => {
    country.addEventListener('mouseover', (e) => {
      changeCountryFill(country, "#59E1F7")
      toggleShowLineToCountry(country, true)
    })

    country.addEventListener('mouseout', (e) => {
      toggleShowLineToCountry(country, false)
      changeCountryFill(country, )  })
  })


  function changeCountryFill(country, color = '') {
    const place = country.querySelectorAll('path')
    place.forEach(item => item.style.fill = color)
    const title = country.querySelector('.text path')
    if (title) {
      title.style.fill = color ? '#5A5A5A' : ''
    }
  }

  function toggleShowLineToCountry(country, isShowing) {
    const id = country.id;
    const line = world.querySelectorAll('.to'+id)
    if (!line.length) return
    line.forEach(l => l.style.opacity = isShowing ? 1 : '');
  }

