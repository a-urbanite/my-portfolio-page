import React, {useRef} from 'react'
import AnimatedButton from '../../AnimatedButton/AnimatedButton'
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';
import styles from './ContactForm.module.scss'

const ContactForm = () => {
  const formRef = useRef(null);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = () => {

  try {
    emailjs.sendForm(process.env.EMAILJS_SERVICE_ID, process.env.EMAILJS_TEMPLATE_ID, formRef.current, process.env.EMAILJS_PUBLIC_KEY)
      .then((result) => {
          console.log(result)
      }, (error) => {
          console.log(error.text);
      });
    } catch (error) {
      console.log(error)
    }

  };

  return (
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
            placeholder='Email adress'
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
  )
}

export default ContactForm