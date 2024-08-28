window.onload = function() {
  const ui = SwaggerUIBundle({
    url: "https://vvqx0s8wpj.execute-api.us-east-1.amazonaws.com/dev/swagger",
    dom_id: '#swagger-ui',
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    layout: "StandaloneLayout"
  });

  window.ui = ui;
}
