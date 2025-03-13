
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message envoyé",
        description: "Nous vous contacterons bientôt. Merci !",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-zenith-black mb-1">
            Nom complet *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:border-zenith-red focus:ring focus:ring-zenith-red/10 focus:outline-none transition-colors duration-200"
            placeholder="Votre nom"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-zenith-black mb-1">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:border-zenith-red focus:ring focus:ring-zenith-red/10 focus:outline-none transition-colors duration-200"
            placeholder="votre@email.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-zenith-black mb-1">
            Téléphone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:border-zenith-red focus:ring focus:ring-zenith-red/10 focus:outline-none transition-colors duration-200"
            placeholder="+226 XX XX XX XX"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-zenith-black mb-1">
            Sujet *
          </label>
          <select
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:border-zenith-red focus:ring focus:ring-zenith-red/10 focus:outline-none transition-colors duration-200"
          >
            <option value="">Sélectionnez un sujet</option>
            <option value="bornage">Bornage</option>
            <option value="delimitation">Délimitation</option>
            <option value="evaluation">Évaluation Foncière</option>
            <option value="etudes">Études d'Aménagement</option>
            <option value="autre">Autre</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-zenith-black mb-1">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:border-zenith-red focus:ring focus:ring-zenith-red/10 focus:outline-none transition-colors duration-200"
          placeholder="Comment pouvons-nous vous aider ?"
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full md:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
