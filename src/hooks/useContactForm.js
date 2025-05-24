import { useState } from 'react';

const useContactForm = (reset) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setIsSuccess(false);
    setIsError(false);

    try {
      const response = await fetch('https://formspree.io/f/xyzwajow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
          _replyto: data.email,
          _subject: `New message from ${data.name}`,
          _gotcha: ''
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setIsError(true);
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return { onSubmit, isSubmitting, isSuccess, isError };
};

export default useContactForm;