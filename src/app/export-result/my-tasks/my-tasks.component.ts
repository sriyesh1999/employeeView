import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
@Component({
  selector: "app-my-tasks",
  templateUrl: "./my-tasks.component.html",
  styleUrls: ["./my-tasks.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyTasksComponent {}
