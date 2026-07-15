import { notFound } from "next/navigation";
import Text from "@/components/Text";
import Button from "@/components/Button";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "PRPH UI Playground",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PlaygroundPage() {
  if (process.env.NODE_ENV === "production") {
    notFound();
  }

  return (
    <>
      <main className="bg-page py-12">
        <header className="border-b border-border-subtle pb-6 mb-12">
          <Text variant="h1" as="h1" className="text-brand-primary mb-2">
            PRPH UI Playground
          </Text>
          <Text variant="body-lead" className="text-content-secondary">
            Системний гайд компонентів. Тільки у режимі розробки (dev).
          </Text>
        </header>

        <section className="mb-16">
          <Text variant="h2" as="h2" className="border-b border-border-subtle pb-3 mb-6">
            1. Типографіка (Typography)
          </Text>
          <div className="space-y-6 bg-surface p-6 rounded-xl border border-border-subtle">
            <div>
              <Text variant="h1">
                Display H1 • Unbounded Black • 32px / 48px — Головні заголовки та банери
              </Text>
            </div>
            <div>
              <Text variant="h2">
                Display H2 • Unbounded Black • 22px / 28px — Назви розділів та секцій
              </Text>
            </div>
            <div>
              <Text variant="h3">
                Heading H3 • Montserrat ExtraBold • 16px / 18px — Заголовки карток та блоків
              </Text>
            </div>
            <div>
              <Text variant="h4">
                Heading H4 • Montserrat SemiBold • 14px / 16px — Другорядні заголовки
              </Text>
            </div>
            <div>
              <Text variant="body-lead">
                Body Lead • Montserrat Normal • 15px / 16px — Лід-абзац (вступ) до статей
              </Text>
            </div>
            <div>
              <Text variant="body">
                Body Regular • Montserrat Normal • 14px — Основний текст новин та матеріалів
              </Text>
            </div>
            <div>
              <Text variant="button">
                UI Button • Montserrat Bold • 12px — Текст кнопок
              </Text>
            </div>
            <div>
              <Text variant="metadata">
                UI Metadata • Montserrat SemiBold • 10px — Дати, категорії, підписи під фото
              </Text>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <Text variant="h2" as="h2" className="border-b border-border-subtle pb-3 mb-6">
            2. Кнопки (Buttons)
          </Text>
          <div className="bg-surface p-6 rounded-xl border border-border-subtle">
            <div className="flex flex-wrap gap-4 items-center">
              <Button intent="primary">Primary (Помаранчева)</Button>
              <Button intent="secondary">Secondary (Чорна)</Button>
              <Button intent="outline">Outline (Контурна)</Button>
              <Button intent="onContent">On Content (Біла)</Button>
              <Button intent="ghost">Ghost (Текст)</Button>
              <Button intent="primary" disabled>Disabled</Button>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <Text variant="h2" as="h2" className="border-b border-border-subtle pb-3 mb-6">
            3. Текст статті (Rich Text / Markdown)
          </Text>
          <div className="bg-surface p-8 rounded-xl border border-border-subtle rich-text-content">
            <p>
              Це перший абзац (Lead). Він автоматично стає більшим за звичайний текст, виділяючи головну думку матеріалу.
            </p>
            <h2>Це підзаголовок H2 статті</h2>
            <p>
              Це звичайний параграф. Тут працює <strong>жирний шрифт</strong> та <em>звичайний курсив</em>. Також ми налаштували <small>дрібний сірий текст</small> для виносок.
            </p>
            <h3>Це підзаголовок H3 статті</h3>
            <ul>
              <li>Елемент списку (наприклад, трек у релізі)</li>
              <li>Ще один елемент маркованого списку</li>
            </ul>
            <blockquote>
              «Це стилізована цитата з помаранчевою лінією зліва та легким фоном, який ми налаштували».
            </blockquote>
            <p>
              Посилання в тексті автоматично отримує помаранчевий колір: <a href="https://prph.media" target="_blank" rel="noreferrer">посилання на медіа</a>.
            </p>
          </div>
        </section>
      </main>
    </>

  );
}