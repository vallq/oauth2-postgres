import app from "./app";

const PORT: number = parseInt(process.env.PORT as string, 10) || 8080;

// set port, listen for requests
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

//webpack hmr activation
type ModuleId = string | number;

interface WebpackHotModule {
  hot?: {
    data: any;
    accept(
      dependencies: string[],
      callback?: (updatedDependencies: ModuleId[]) => void,
    ): void;
    accept(dependency: string, callback?: () => void): void;
    accept(errHandler?: (err: Error) => void): void;
    dispose(callback: (data: any) => void): void;
  };
}

declare const module: WebpackHotModule;
if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => server.close());
}