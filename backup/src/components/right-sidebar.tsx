import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

export function RightSidebar() {
  return (
    <aside className="w-64 bg-[#f3f2f1] border-l border-gray-200 p-4">
      <h2 className="font-semibold mb-4">Related</h2>
      <Card className="mb-4">
        <CardContent className="p-4">
          <h3 className="font-semibold mb-2">Cafe A100 for Woodland Bank</h3>
          <p className="text-sm text-muted-foreground mb-2">
            Woodland Bank • $100,000 • 8 days to close
          </p>
          <Button variant="outline" className="w-full justify-between">
            Review draft and reply to Chris Naidoo
            <ChevronRight className="h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4">
          <h3 className="font-semibold mb-2">
            Partnership opportunity for Fabrikam
          </h3>
          <p className="text-sm text-muted-foreground mb-2">
            Fabrikam • $1,000,000 • 15 days to close
          </p>
          <Button variant="outline" className="w-full justify-between">
            Prepare me for Fabrikam&apos;s key stakeholder meeting
            <ChevronRight className="h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    </aside>
  );
}
