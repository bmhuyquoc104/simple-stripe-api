import React from "react";

function CheckoutSuccess() {
  const url = window.location.href;
  const sessionId = new URL(url).searchParams.get("session_id");
  return <h3>Check out was success {sessionId}</h3>;
}

export default CheckoutSuccess;
