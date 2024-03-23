test("Test passing", async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 1000); // Simulate an asynchronous operation
  });
});

