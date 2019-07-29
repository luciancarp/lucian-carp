import React from 'react'
import contactStyles from './contact.module.scss'

const Contact = () => {
  return (
    <section id={'contact'} className={contactStyles.container}>
      <h1>Contact</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis
        ex tortor. Duis ex nisl, molestie at consequat nec, tincidunt ut turpis.
        Maecenas in placerat tortor, sed pulvinar orci. Etiam eu dui magna.
        Nulla felis eros, rhoncus id dictum commodo, fringilla ut sem. Cras
        imperdiet eget justo quis interdum. Sed tortor tellus, scelerisque eget
        placerat in, ultricies a nulla. Morbi sit amet velit convallis,
        pellentesque dolor sit amet, elementum urna. Mauris facilisis ligula in
        turpis condimentum bibendum. Maecenas quis felis metus.
      </p>
    </section>
  )
}

export default Contact
