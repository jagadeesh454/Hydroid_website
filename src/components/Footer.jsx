import Container from "./Container.jsx";

export default function Footer() {
  return (
    <footer className="mt-12 border-t bg-white">
      <Container>
        <div className="py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Hydroid. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
