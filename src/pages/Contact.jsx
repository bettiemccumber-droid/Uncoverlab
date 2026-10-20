import { useState } from 'react';
import SocialWidget from '../components/SocialWidget';
import { usePageTitle } from '../hooks/usePageTitle';
import { studio } from '../data/site';

const subjects = ['A product on the bench', 'A platform question', 'A correction', 'Something else'];

/**
 * 联系页面。左侧是深色信息栏，右侧是下划线表单。
 * @returns {JSX.Element}
 */
export default function Contact() {
  usePageTitle('Contact');
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: subjects[0],
    message: '',
  });

  /**
   * 更新单个字段。
   * @param {string} key
   * @param {string} value
   */
  const setField = (key, value) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  /**
   * 校验并展示发送成功状态。
   * @param {import('react').FormEvent<HTMLFormElement>} event
   */
  const onSubmit = (event) => {
    event.preventDefault();
    const next = {};
    if (form.name.trim().length < 2) next.name = 'Please add your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email.';
    if (form.message.trim().length < 12) next.message = 'A little more detail helps us reply.';
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  };

  return (
    <section className="contact-split">
      <aside className="contact-intro">
        <p className="kicker">Contact</p>
        <h1>Write to the lab.</h1>
        <p>Corrections, questions, and objects you think we should live with. Desk hours are weekday mornings.</p>
        <address>
          {studio.lines.map((line) => (
            <span key={line}>{line}</span>
          ))}
          <a href={`mailto:${studio.email}`}>{studio.email}</a>
          <a href={`tel:${studio.phone.replace(/[^\d+]/g, '')}`}>{studio.phone}</a>
        </address>
        <SocialWidget variant="labeled" title="Elsewhere" />
      </aside>
      <div className="contact-form-wrap">
        {sent ? (
          <div className="sent-note" role="status">
            <p className="kicker">Received</p>
            <h2>Thanks, {form.name.trim().split(' ')[0]}.</h2>
            <p>
              Your note about “{form.subject}” is with the desk. We reply to {form.email} when the next quiet hour shows up.
            </p>
          </div>
        ) : (
          <form className="line-form" onSubmit={onSubmit} noValidate>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                autoComplete="name"
                value={form.name}
                onChange={(event) => setField('name', event.target.value)}
                aria-invalid={Boolean(errors.name)}
              />
              {errors.name ? <p className="field-error">{errors.name}</p> : null}
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={(event) => setField('email', event.target.value)}
                aria-invalid={Boolean(errors.email)}
              />
              {errors.email ? <p className="field-error">{errors.email}</p> : null}
            </div>
            <div className="field">
              <label htmlFor="subject">Subject</label>
              <div className="subject-picks">
                {subjects.map((subject) => (
                  <label key={subject}>
                    <input
                      type="radio"
                      name="subject"
                      value={subject}
                      checked={form.subject === subject}
                      onChange={(event) => setField('subject', event.target.value)}
                    />
                    <span>{subject}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={form.message}
                onChange={(event) => setField('message', event.target.value)}
                aria-invalid={Boolean(errors.message)}
              />
              {errors.message ? <p className="field-error">{errors.message}</p> : null}
            </div>
            <button className="btn btn-lime" type="submit">
              Send the note
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
