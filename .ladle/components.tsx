import React from "react";
import type { GlobalProvider } from "@ladle/react";

import "../styles/globals.css";
import "./extra-style.css";

export const Provider: GlobalProvider = ({ children }) => <>{children}</>;
