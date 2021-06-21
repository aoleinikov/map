
function mapInit() {
  const isTabletOrMore = window.innerWidth > 767;

  if (!isTabletOrMore) {
    return;
  }

  const world = document.querySelector('.world-wrapper');
  const countries = world.querySelectorAll('.country');
  const buttons = world.querySelectorAll('.symbol')

  countries.forEach(country => {
    country.addEventListener('mouseover', (e) => {
      changeCountryFill(country, "#59E1F7")
      toggleShowLineToCountry(country, true)
    })

    country.addEventListener('mouseout', (e) => {
      toggleShowLineToCountry(country, false)
      changeCountryFill(country,)
    })
  })

  buttons.forEach(button => {

    button.addEventListener('click', (e) => {
      const id = button.classList[1];
      const activeCls = 'activeClick';
      const activeClsLine = 'activeLineClick';
      const line = world.querySelectorAll('.to' + id)
      let isActive = false;
      world.querySelectorAll('.compassionate' + id).forEach(el => {
        isActive = [...el.classList].includes(activeCls)
        isActive ? el.classList.remove(activeCls) : el.classList.add(activeCls)
      })
      console.log(line)
      line.forEach(l => isActive ? l.classList.remove(activeClsLine) : l.classList.add(activeClsLine));
    })
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
    const line = world.querySelectorAll('.to' + id)
    const info = world.querySelectorAll('.compassionate' + id)
    if (!line.length) return
    line.forEach(l => l.style.opacity = isShowing ? 1 : '');
    info.forEach(item => {
      item.classList[isShowing ? "add" : "remove"]("active")
    });
  }
}

mapInit()
