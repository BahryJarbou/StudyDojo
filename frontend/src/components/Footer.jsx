const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4 rounded-4xl shadow-2xl mb-4 shadow-black w-[98%] self-center">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by
          StudyDojo
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
