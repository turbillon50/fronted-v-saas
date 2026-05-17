import { PageHeader } from "@/components/workspace/PageHeader";
import { MarketplaceGrid } from "@/components/workspace/MarketplaceGrid";

export default function MarketplacePage() {
  return (
    <>
      <PageHeader
        eyebrow="Marketplace"
        title="Install capabilities. Compose your product."
        description="Modular building blocks for auth, payments, maps, AI, messaging and more. B installs and configures them for you."
      />
      <MarketplaceGrid context="workspace" />
    </>
  );
}
