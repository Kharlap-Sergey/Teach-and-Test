import {
  Component,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
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
import { getHashCode } from '@app/shared/utils/calculateHashCode';
import { editorConfig } from './course-description-editor-config';

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
  //use it to override the children style' class (.angular-editor-toolbar)
  encapsulation: ViewEncapsulation.None,
})
export class EditInformationComponent
  implements OnInit {
  private returnUrl: string;
  private id: number;
  private courseHash: number;

  public config = editorConfig;
  public isModalOpened = false;
  public title: string = 'Angular';
  public course = new CourseModel();
  public tools: object = {
    items: [
      'Undo',
      'Redo',
      '|',
      'Bold',
      'Italic',
      'Underline',
      'StrikeThrough',
      '|',
      'FontName',
      'FontSize',
      'FontColor',
      'BackgroundColor',
      '|',
      'SubScript',
      'SuperScript',
      '|',
      'LowerCase',
      'UpperCase',
      '|',
      'Formats',
      'Alignments',
      '|',
      'OrderedList',
      'UnorderedList',
      '|',
      'Indent',
      'Outdent',
      '|',
      'CreateLink',
      'Image',
      '|',
      'ClearFormat',
      'Print',
      'SourceCode',
      '|',
      'FullScreen',
    ],
  };
  public get canLeave(): boolean {
    const courseHash = getHashCode(this.course);
    return this.courseHash == courseHash;
  }
  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private courseService: CourseService
  ) {
    this.courseHash = getHashCode(this.course);
    this.activateRoute.queryParamMap.subscribe(
      (res: any) => {
        this.returnUrl = res.params.returnUrl;
      }
    );
    this.id = this.activateRoute.parent.snapshot.params[
      'id'
    ];
  }

  ngOnInit(): void {
    console.log(`this.id`, this.id);
    this.courseService
      .getCourseDetails(this.id)
      .subscribe((course: CourseModel) => {
        this.courseHash = getHashCode(course);
        this.course = course;
      });
  }

  public cancel() {
    if (this.canLeave) {
      this.goBack();
      return;
    }
    alert("can't leave");
  }
  public save() {
    this.goBack();
  }

  public handleImageComplete(res: any) {
    this.isModalOpened = false;
    this.courseService
      .uploadCourseLogo(res[0].id, this.course.id)
      .subscribe((course: CourseModel) => {
        this.course.logoId = course.logoId;
      });
  }
  private goBack() {
    if (!this.returnUrl) {
      return;
    }

    this.router.navigateByUrl(this.returnUrl);
  }
}
