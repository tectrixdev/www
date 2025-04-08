function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en " className="overflow-x-hidden">
      {children}
    </html>
  );
}

export default RootLayout;
