import React, {useRef} from 'react'
import styles from './Contact.module.scss'
import AnimatedButton from '../AnimatedButton/AnimatedButton'
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';

const Contact = () => {
  const formRef = useRef(null);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = () => {

  try {
    emailjs.sendForm(process.env.EMAILJS_SERVICE_ID, process.env.EMAILJS_TEMPLATE_ID, formRef.current, process.env.EMAILJS_PUBLIC_KEY)
      .then((result) => {
          console.log(result)
          // window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log(error.text);
      });
    } catch (error) {
      console.log(error)
    }
  };


  return (
    <div className={styles.container} id="contactSection">
      <div className={styles.titleBlock}>
        <h1 className={styles.verticalTitle}>Contact</h1> 
      </div>
      <div className={styles.formBlock}>
        <h2 className={styles.subTitle}><hr className={styles.horizontalLine}/>Drop me a line!</h2>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)} ref={formRef}>
          <input 
            className={styles.input} 
            type='text' 
            placeholder='Name'
            {...register("name", { required: true })}
          ></input>
            {errors.name && errors.name.type === 'required' && (
              <span role="alert" className={styles.errorMessage}>
                Name is required
              </span>
            )}
          <input 
            className={styles.input} 
            type='text' 
            placeholder='Emailadress'
            {...register("email", { required: true, pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            } })}
          ></input>
            {errors.email && errors.email.type === 'required' && (
              <span role="alert" className={styles.errorMessage}>
                Email is required
              </span>
            )}
            {errors.email && errors.email.type === 'pattern' && (
              <span role="alert" className={styles.errorMessage}>
                Invalid email address
              </span>
            )}
          <textarea 
            className={styles.textarea} 
            placeholder='Message'
            {...register("message", { required: true })}
          ></textarea>
            {errors.message && errors.message.type === 'required' && (
              <span role="alert" className={styles.errorMessage}>
                Message is required
              </span>
            )}
          <AnimatedButton text="Go!"></AnimatedButton>
        </form>
      </div>
      <div className={styles.mapBlock}>
      </div>
    </div>
  )
}

export default Contact