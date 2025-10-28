import type { ChatKitOptions } from "@openai/chatkit";

const options: ChatKitOptions = {
  api: {
    // Endpoint que cria a sessão no backend (Next.js API route)
    createSession: "/api/create-session",
    // uploads: { endpoint: "/api/upload" }, // opcional, se quiser permitir upload
  },

  theme: {
    colorScheme: "dark",
    radius: "round",
    density: "compact",
    typography: {
      baseSize: 15,
      fontFamily:
        '"OpenAI Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif',
      fontFamilyMono:
        'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace',
      fontSources: [
        {
          family: "OpenAI Sans",
          src: "https://cdn.openai.com/common/fonts/openai-sans/v2/OpenAISans-Regular.woff2",
          weight: 400,
          style: "normal",
          display: "swap",
        },
        // ...and 7 more font sources
      ],
    },
  },

  composer: {
    placeholder: "Envie sua pergunta...",
    attachments: {
      enabled: false,
    },
    tools: [
      {
        id: "search_docs",
        label: "Search docs",
        shortLabel: "Docs",
        placeholderOverride: "Buscar documentação",
        icon: "book-open",
        pinned: false,
      },
      {
        id: "create_ticket",
        label: "Abrir chamado",
        shortLabel: "Suporte",
        placeholderOverride: "Descreva seu problema...",
        icon: "inbox",
        pinned: true,
      },
    ],
  },

  startScreen: {
    greeting: "Como posso te ajudar hoje?",
    prompts: [
      {
        label: "O que você pode fazer?",
        prompt: "O que você pode fazer?",
        icon: "circle-question",
      },
      {
        label: "Quero aprender sobre o ChatKit",
        prompt: "Explique como usar o ChatKit da OpenAI",
        icon: "sparkles",
      },
    ],
  },

  // 🔧 Configurações adicionais
  locale: "pt-BR",

  header: {
    title: "Assistente Virtual",
    subtitle: "OpenAI ChatKit Demo",
    icon: "bot",
  },

  behavior: {
    autoScroll: true,
    persistHistory: true,
    showTimestamps: false,
    enableSound: false,
  },

  workflow: {
    id: process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID ?? "",
  },

  threadItemActions: {
    copy: true,
    delete: true,
    regenerate: true,
  },

  onClientTool: async (tool) => {
    console.log("Executando ferramenta do cliente:", tool.id);
    if (tool.id === "search_docs") {
      // Exemplo: abrir busca de documentação
      window.open("https://platform.openai.com/docs", "_blank");
    }
  },

  entities: {
    // Exemplo: entidades customizadas para menções
    users: [
      { id: "assistant", name: "Assistente", avatar: "/bot-avatar.png" },
      { id: "user", name: "Você" },
    ],
  },

  widgets: {
    // Exemplo: rodapé customizado
    footer: {
      content: "💡 Powered by OpenAI ChatKit",
      align: "center",
    },
  },
};

export default options;

/*
import { ColorScheme, StartScreenPrompt, ThemeOption, ChatKitOptions } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "What can you do?",
    prompt: "What can you do?",
    icon: "circle-question",
  },
];

export const PLACEHOLDER_INPUT = "Ask anything...";

export const GREETING = "How can I help you today?";

export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      hue: 220,
      tint: 6,
      shade: theme === "dark" ? -1 : -4,
    },
    accent: {
      primary: theme === "dark" ? "#f1f5f9" : "#0f172a",
      level: 1,
    },
  },
  radius: "round",
  density: 'compact',
    typography: {
      baseSize: 15,
      fontFamily: '"OpenAI Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif',
      fontFamilyMono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace',
      fontSources: [
        {
          family: 'OpenAI Sans',
          src: 'https://cdn.openai.com/common/fonts/openai-sans/v2/OpenAISans-Regular.woff2',
          weight: 400,
          style: 'normal',
          display: 'swap'
        }
      // ...and 7 more font sources
      ]
    },
  // Add other theme options here
  // chatkit.studio/playground to explore config options
});
*/
