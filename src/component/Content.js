import Visual from './Visual'

const Content = function() {
  
  const visual_html = Visual();
  const template = `
    ${visual_html}
    <h2>content here</h2>
  `

  return template;
}

export default Content;