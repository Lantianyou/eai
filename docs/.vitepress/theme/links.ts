/**
 * True when a link points off-site and should open in a new tab.
 * mailto: and other scheme links stay in the current context.
 */
export const isExternal = (link: string): boolean => link.startsWith("http");
