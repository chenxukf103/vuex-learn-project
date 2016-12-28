/**
 * Created by suyc on 2016/12/28.
 */
var packageConfig = required('../package.json');
var exec = function (cmd) {
    return required('child_process').execSync(cmd).toString().trim();
};
var versionRequirements = [
    {

    }
];