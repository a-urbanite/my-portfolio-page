import styles from './Contact.module.scss'
import ContactForm from './ContactForm/ContactForm';
import MapLoader from './Map/MapLoader';

const Contact = () => {

  return (
    <div className={styles.container} id="contactSection">
      <div className={styles.titleBlock}>
        <h1 className={styles.verticalTitle}>Contact</h1> 
      </div>
      <div className={styles.formBlock}>
        <h2 className={styles.subTitle}><hr className={styles.horizontalLine}/>Drop me a line!</h2>
        <ContactForm></ContactForm>
      </div>
      <div className={styles.mapBlock}>
        <MapLoader></MapLoader>
      </div>
    </div>
  )
}

export default Contact