import Container from "./Container.jsx";

export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-16 sm:py-20">
      <Container>
        {(title || subtitle) && (
          <header className="mb-10 text-center">
            {title && <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>}
            {subtitle && (
              <p className="mt-2 text-base text-muted-foreground text-gray-600">
                {subtitle}
              </p>
            )}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}
