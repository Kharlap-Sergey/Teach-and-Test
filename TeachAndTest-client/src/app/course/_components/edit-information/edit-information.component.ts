import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  ActivatedRoute,
  ParamMap,
  Router,
} from '@angular/router';
import { CourseModel } from '@app/course/_models/course.model';
import { Observer } from 'rxjs';
import { CourseService } from '@app/course/_services/course.service';
import {
  HtmlEditorService,
  ImageService,
  LinkService,
  ToolbarService,
} from '@syncfusion/ej2-angular-richtexteditor';

@Component({
  selector: 'app-edit-information',
  templateUrl: './edit-information.component.html',
  styleUrls: ['./edit-information.component.scss'],
  providers: [
    ToolbarService,
    LinkService,
    ImageService,
    HtmlEditorService,
  ],
})
export class EditInformationComponent
  implements OnInit {

  private returnUrl: string;
  private id: number;

  public isModalOpened = false;
  public title: string = 'Angular';
  public course = new CourseModel();
  public tools: object = {
    items: ['Undo', 'Redo', '|',
        'Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
        'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
        'SubScript', 'SuperScript', '|',
        'LowerCase', 'UpperCase', '|',
        'Formats', 'Alignments', '|', 'OrderedList', 'UnorderedList', '|',
        'Indent', 'Outdent', '|', 'CreateLink',
        'Image', '|', 'ClearFormat', 'Print', 'SourceCode', '|', 'FullScreen']
    };
  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private courseService: CourseService
  ) {
    this.activateRoute.queryParamMap.subscribe(
      (res: any) => {
        this.returnUrl = res.params.returnUrl;
      }
    );
    this.id = this.activateRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.courseService
      .getCourseDetails(this.id)
      .subscribe((course: CourseModel) => {
        this.course = course;
      });
  }

  cancel() {
    this.goBack();
  }
  save() {
    this.goBack();
  }
  goBack() {
    if (!this.returnUrl) {
      return;
    }

    this.router.navigateByUrl(this.returnUrl);
  }

  handleImageComplete(res: any) {
    this.isModalOpened = false;
    this.courseService
      .uploadCourseLogo(res[0].id, this.course.id)
      .subscribe((course: CourseModel) => {
        this.course.logoId = course.logoId;
      });
  }
}
