'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { HiArrowNarrowRight } from 'react-icons/hi'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { FormContainer, Input, TextArea } from './styles';

const contactFormSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(1).max(500),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export const Form = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      await axios.post('/api/contact', data)
      toast.success('Mensagem enviada com sucesso!')
      reset()
    } catch (error) {
      toast.error('Ocorreu um erro ao enviar a mensagem. Tente novamente.')
    }
  }


  return (
    <FormContainer
    onSubmit={handleSubmit(onSubmit)}
    >
    <Input
      placeholder="Nome"
      {...register('name')}
    />
    <Input
      placeholder="E-mail"
      type="email"
      {...register('email')}
    />
    <TextArea
      placeholder="Mensagem"
      {...register('message')}
      maxLength={500}
    />

      <button disabled={isSubmitting}>
        Enviar mensagem
      </button>
  </FormContainer>

  );
}